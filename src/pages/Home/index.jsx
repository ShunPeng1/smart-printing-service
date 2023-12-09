import { Box, Typography, Stack } from '@mui/material';
import React from 'react';
import { PrintRequest } from './PrintRequest';
import DateCalendarValue from './DateTime';
import ColumnGroupingTable from './Table';
import { Form } from 'react-router-dom';
import { useState } from 'react';
import { PrintingLogProvider } from '../../contexts/PrintingLogContext';
import { AuthProvider } from '../../contexts/AuthContext';
import { PrinterProvider } from '../../contexts/PrinterContext';

export default function HomePage() {

  return (
    
    <AuthProvider>
      <PrinterProvider>
        <Stack direction={'column'} spacing={5} >

          <Stack direction={'row'}>
            <Stack direction="column" spacing={'200px'} sx={{display: 'flex', width:'90%'}}>
              <Typography variant='h2'>TRANG CHỦ</Typography>
              <PrintRequest/>
            </Stack>
            <DateCalendarValue/>


          </Stack>
          {/* <SummaryTable></SummaryTable> */}
            {/* <ColumnGroupingTable parentTableRows={tableRows} setParentTableRows={setTableRows} />
             */}
             <ColumnGroupingTable />
            
        </Stack>
      </PrinterProvider>
    </AuthProvider>

  );
}

