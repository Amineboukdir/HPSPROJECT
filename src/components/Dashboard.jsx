import { AppShell } from '@mantine/core';
import { HeaderSimple } from './Header';
import { useEffect } from 'react';

export const Dashboard = () => {
    useEffect(() => {
        document.body.classList.add('inst-body');
        return () => {
          document.body.classList.remove('inst-body');
        };
      }, []);
    return (
        // Height is a number, it will be converted to rem
        // and used as height at all viewport sizes
        <AppShell header={{ height: 48 }}>
            <AppShell.Header><HeaderSimple /></AppShell.Header>
        </AppShell>


    );
};