import React from 'react'
import {TableHeader,TableContent, TableInfo, TableId, TableSubsidiaryName } from './styles'


export const Table:React.FC = () => {
  return (
      <TableHeader>
      <TableContent>
          <TableInfo>
              <TableId>ID</TableId>
              <TableSubsidiaryName>NOME DA FILIAL</TableSubsidiaryName>
              <span>FUNCIONÁRIOS</span>
          </TableInfo>
      </TableContent>
    </TableHeader>
 
  )
}