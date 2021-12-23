import React, { createContext, useCallback, useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import IEmployee from '../interfaces/Employee';
import ISubsidiary from '../interfaces/Subsidiary';

interface ICreateEmployee{
    name: string;
    subsidiary: string;
}

interface IMockContextData {
    getSubsidiaries(): Promise<Array<ISubsidiary>>
    createSubsidiary(name: string): Promise<ISubsidiary>;
    editSubsidiary(subsidiary: ISubsidiary): Promise<ISubsidiary>;
    getEmployees(): Promise<Array<IEmployee>>;
    createEmployee(data: ICreateEmployee): Promise<IEmployee>;
    editEmployee(data: IEmployee): Promise<IEmployee>;
    deleteEmployee(id: string): Promise<void>;
}

const MockContext = createContext({} as IMockContextData);

const storageSubsidiaries = '@cabelex::subsidiaries';
const stogareEmployees = '@cabelex::employees';

const MockProvider: React.FC = ({ children }) => {

    const [subsidiaries, setSubsidiaries] = useState<Array<ISubsidiary>>(() => {
        const storagedSubsidiaries = localStorage.getItem(storageSubsidiaries);
        if(storagedSubsidiaries){
            return JSON.parse(storagedSubsidiaries);
        }
        return [];
    });

    const [employees, setEmployees] = useState<Array<IEmployee>>(() => {
        const stogaredEmployees = localStorage.getItem(stogareEmployees);
        if(stogaredEmployees){
            return JSON.parse(stogaredEmployees);
        }
        return [];
    });


    const createSubsidiary = useCallback( async (name: string) => {
        for(let i = 0; i < subsidiaries.length; i++){
            if(subsidiaries[i].name === name)
                    throw new Error('Filial existente');
        }

        let subsidiary = {
            id: uuid(),
            name,
            employeeNumber: 0
        } as ISubsidiary;

        let subsidariesArray = [...subsidiaries, subsidiary];
        setSubsidiaries(subsidariesArray);
        localStorage.setItem(storageSubsidiaries, JSON.stringify(subsidariesArray));
        
        return subsidiary;
        
    }, [subsidiaries]);
    
    const createEmployee = useCallback(async ({ name, subsidiary }: ICreateEmployee) => {
        
        console.log(employees);
        const employeeIndex = employees.findIndex(emp => emp.name === name);
        if(employeeIndex >= 0){
            throw new Error('Funcionário Existente');
        }
        
        const subsidiaryIndex = subsidiaries.findIndex(sub => sub.id === subsidiary);
        if(subsidiaryIndex < 0){
            throw new Error('Filial não cadastrada');
        }
        
        const employee = {
            id: uuid(),
            name,
            filial: subsidiary,
        } as IEmployee;
        
        let newSubsidiary = subsidiaries[subsidiaryIndex];
        newSubsidiary.employeeNumber += 1;

        let employeesArray = [...employees, employee];
        setEmployees(employeesArray);
        localStorage.setItem(stogareEmployees, JSON.stringify(employeesArray));

        let newSubsidiaries = subsidiaries;
        newSubsidiaries[subsidiaryIndex] = newSubsidiary;
        setSubsidiaries(newSubsidiaries);

        localStorage.setItem(storageSubsidiaries, JSON.stringify(newSubsidiaries));

        return employee;

    }, [subsidiaries, employees]);

    const getSubsidiaries = useCallback(async () => {
        return subsidiaries;
    }, [subsidiaries]);

    const getEmployees = useCallback(async () => {
        let employeesReturn = employees;

        employeesReturn.map(emp => {
            const subsidiary = subsidiaries.find(sub => sub.id === emp.filial);
            if(subsidiary)
                emp.filial = subsidiary.name;
        });      
        
        return employeesReturn;
    }, [employees, subsidiaries]);

    const editSubsidiary = useCallback(async ({ id, name }: ISubsidiary) => {
        const subsidiaryIndex = subsidiaries.findIndex(sub => sub.id === id);
        if(subsidiaryIndex < 0) {
            throw new Error('Filial não encontrada');
        }
                
        const newSubsidiary = {
            id,
            name,
            employeeNumber: subsidiaries[subsidiaryIndex].employeeNumber
        } as ISubsidiary;

        let newSubsidiaries = subsidiaries;
        newSubsidiaries[subsidiaryIndex] = newSubsidiary;
        setSubsidiaries(newSubsidiaries);

        localStorage.setItem(storageSubsidiaries, JSON.stringify(newSubsidiaries));
        
        return newSubsidiary;
    }, [subsidiaries]);

    const editEmployee = useCallback(async ({ id, name, filial }: IEmployee) => {
        const employeeIndex = employees.findIndex(emp => emp.id === id);
        if(employeeIndex < 0){
            throw new Error('Funcionário não encontrado');
        }

        const subsidiaryIndex = subsidiaries.findIndex(sub => sub.id === filial);
        if(subsidiaryIndex < 0){
            throw new Error('Filial não cadastrada');
        }

        const employee = {
            id,
            name,
            filial: subsidiaries[subsidiaryIndex].id,
        } as IEmployee;

        let employeesArray = [...employees, employee];
        setEmployees(employeesArray);
        localStorage.setItem(stogareEmployees, JSON.stringify(employeesArray));
        return employee;

    }, [employees, subsidiaries]);

    const deleteEmployee = useCallback( async (id: string)=> {
        const employeeIndex = employees.findIndex(emp => emp.id === id);
        if(employeeIndex < 0){
            throw new Error('Funcionário não encontrado');
        }
        const employee = employees[employeeIndex];
        const subsidiaryIndex = subsidiaries.findIndex(sub => sub.id === employee.filial);
        let newSubsidiary = subsidiaries[subsidiaryIndex];
        newSubsidiary.employeeNumber -= 1;


        let employeesArray = employees;
        delete employeesArray[employeeIndex];

        setEmployees(employeesArray);
        localStorage.setItem(stogareEmployees, JSON.stringify(employeesArray));

        let newSubsidiaries = subsidiaries;
        newSubsidiaries[subsidiaryIndex] = newSubsidiary;
        setSubsidiaries(newSubsidiaries);
        localStorage.setItem(storageSubsidiaries, JSON.stringify(newSubsidiaries));

    }, [employees, subsidiaries]);

    return(
        <MockContext.Provider
            value={{
                createSubsidiary,
                createEmployee,
                getSubsidiaries,
                getEmployees,
                editSubsidiary,
                editEmployee,
                deleteEmployee
            }}
        >
            { children }
        </MockContext.Provider>
    )
};

function useMock(){
    const context = useContext(MockContext);
    return context;
}


export { MockProvider, useMock };