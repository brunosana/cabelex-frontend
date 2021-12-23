import React from 'react'
import {TableHeader,TableContent, TableInfo, TableId, TableSubsidiaryName } from './styles'

interface IColumns {
  column1: string;
  column2: string;
  column3: string;
}

export const Table:React.FC<IColumns> = ({ column1, column2, column3 }) => {
  return (
      <TableHeader>
      <TableContent>
          <TableInfo>
              <TableId>{column1}</TableId>
              <TableSubsidiaryName>{column2}</TableSubsidiaryName>
              <span>{column3}</span>
          </TableInfo>
      </TableContent>
    </TableHeader>
 
  )
}