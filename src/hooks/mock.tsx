import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import IEmployee from '../interfaces/Employee';
import ISubsidiary from '../interfaces/Subsidiary';

interface ICreateEmployee{
    name: string;
    subsidiary: string;
}

interface IChangeSubsidiary {
    name: string;
    id: string;
}
interface IMockContextData {
    getSubsidiaries(): Promise<Array<ISubsidiary>>
    createSubsidiary(name: string): Promise<ISubsidiary>;
    editSubsidiary(subsidiary: IChangeSubsidiary): Promise<ISubsidiary>;
    getEmployees(): Promise<Array<IEmployee>>;
    createEmployee(data: ICreateEmployee): Promise<IEmployee>;
    editEmployee(data: IEmployee): Promise<IEmployee>;
    deleteEmployee(id: string): Promise<void>;
    deleteSubsidiary(id: string): Promise<void>;
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
        
        const employeeIndex = employees.findIndex(emp => emp.name === name);
        if(employeeIndex >= 0){
            throw new Error('Funcion??rio Existente');
        }
        
        const subsidiaryIndex = subsidiaries.findIndex(sub => sub.id === subsidiary);
        if(subsidiaryIndex < 0){
            throw new Error('Filial n??o cadastrada');
        }

        const filialId = subsidiaries[subsidiaryIndex].id;
       
        const employee: IEmployee = {
            id: uuid(),
            name,
            filial: filialId,
        } 
        
        
        const newSubsidiary = subsidiaries[subsidiaryIndex];
        newSubsidiary.employeeNumber += 1;
        
        const employeesArray = [...employees, employee];
        setEmployees(employeesArray);

        localStorage.setItem(stogareEmployees, JSON.stringify(employeesArray));

        const newSubsidiaries = subsidiaries;
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

        for(let i = 0; i < employeesReturn.length; i++) {
            const subsidiary = subsidiaries.find(sub => sub.id === employeesReturn[i].filial);
            if(subsidiary)
            employeesReturn[i].filial = subsidiary.name;

        }  
        
        return employeesReturn;
    }, [employees, subsidiaries]);

    const editSubsidiary = useCallback(async ({ id, name }: IChangeSubsidiary) => {
        const subsidiaryIndex = subsidiaries.findIndex(sub => sub.id === id);
        if(subsidiaryIndex < 0) {
            throw new Error('Filial n??o encontrada');
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
            throw new Error('Funcion??rio n??o encontrado');
        }

        const subsidiaryIndex = subsidiaries.findIndex(sub => sub.id === filial);
        if(subsidiaryIndex < 0){
            throw new Error('Filial n??o cadastrada');
        }

        const oldSubIndex = subsidiaries.findIndex(sub => sub.name === employees[employeeIndex].filial);

        const employee = {
            id,
            name,
            filial: subsidiaries[subsidiaryIndex].id,
        } as IEmployee;


        let employeesArray = employees;
        employeesArray[employeeIndex] = employee;
        setEmployees(employeesArray);
        localStorage.setItem(stogareEmployees, JSON.stringify(employeesArray));

        let newSubsidiaries = subsidiaries;
        newSubsidiaries[oldSubIndex].employeeNumber -= 1;
        newSubsidiaries[subsidiaryIndex].employeeNumber += 1;
        setSubsidiaries(newSubsidiaries);
        localStorage.setItem(storageSubsidiaries, JSON.stringify(newSubsidiaries));

        return employee;

    }, [employees, subsidiaries]);

    const deleteEmployee = useCallback( async (id: string)=> {
        const employeeIndex = employees.findIndex(emp => emp.id === id);
        if(employeeIndex < 0){
            throw new Error('Funcion??rio n??o encontrado');
        }
        const employee = employees[employeeIndex];
        const subsidiaryIndex = subsidiaries.findIndex(sub => sub.name === employee.filial);
        let newSubsidiary = subsidiaries[subsidiaryIndex];
        newSubsidiary.employeeNumber -= 1;


        let employeesArray = employees;
        employeesArray.splice(employeeIndex, 1);

        setEmployees(employeesArray);
        localStorage.setItem(stogareEmployees, JSON.stringify(employeesArray));

        let newSubsidiaries = subsidiaries;
        newSubsidiaries[subsidiaryIndex] = newSubsidiary;
        setSubsidiaries(newSubsidiaries);
        localStorage.setItem(storageSubsidiaries, JSON.stringify(newSubsidiaries));

    }, [employees, subsidiaries]);

    const deleteSubsidiary = useCallback(async (id: string) => {
        const subsidiaryIndex = subsidiaries.findIndex(sub => sub.id === id);
        if(subsidiaryIndex < 0){
            throw new Error('Filial n??o encontrada');
        }

        const haveSomeEmployeeOnThisSubsidiary = employees.findIndex(emp => emp.filial === id);
        if(haveSomeEmployeeOnThisSubsidiary >=0){
            throw new Error('Esta filial possui funcion??rios alocados nela');
        }

        let newSubsidiaries = subsidiaries;
        newSubsidiaries.splice(subsidiaryIndex, 1);
        setSubsidiaries(newSubsidiaries);
        localStorage.setItem(storageSubsidiaries, JSON.stringify(newSubsidiaries));

    },[subsidiaries, employees]);

    return(
        <MockContext.Provider
            value={{
                createSubsidiary,
                createEmployee,
                getSubsidiaries,
                getEmployees,
                editSubsidiary,
                editEmployee,
                deleteEmployee,
                deleteSubsidiary
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