import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import { useEffect } from 'react';

import classes from './card-profile.module.css';


/**
 *  institution_id character varying(3) COLLATE pg_catalog."default" NOT NULL,
    card_profile character varying(3) COLLATE pg_catalog."default" NOT NULL,
    creation_user character varying(64) COLLATE pg_catalog."default",           REMOVED
    creation_date date,                                                         REMOVED
    last_modif_user character varying(64) COLLATE pg_catalog."default",         REMOVED
    last_modif_date date,                                                       REMOVED            
    card_number character varying(22) COLLATE pg_catalog."default",
    description character varying(256) COLLATE pg_catalog."default",
    status character varying(1) COLLATE pg_catalog."default",
    key_profile character varying(3) COLLATE pg_catalog."default",
    expiry_date character varying(4) COLLATE pg_catalog."default",
    tracki character varying(256) COLLATE pg_catalog."default",
    trackii character varying(256) COLLATE pg_catalog."default",
    pin character varying(16) COLLATE pg_catalog."default",
    pvv_data character varying(16) COLLATE pg_catalog."default",
    cvv1 character varying(4) COLLATE pg_catalog."default",
    icvv character varying(4) COLLATE pg_catalog."default",
    cvv2 character varying(4) COLLATE pg_catalog."default",
    CONSTRAINT iso8583_card_profile_pkey PRIMARY KEY (institution_id, card_profile)
 */


export const CardProfile = () => {
    useEffect(() => {
        document.body.classList.add('custom-body');
        // set default font size for the html element
        document.getElementsByTagName('html')[0].style.fontSize = '16px';
        return () => {
          document.body.classList.remove('custom-body');
        };
      }, []);
    return (
        <Container size={420} my={40} className={classes.main_container}>
            <Title ta="center" className={classes.title}>
                Card Profile Form
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Please fill the form below
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Institution Id" placeholder="000" required /> {/* REF KEY TO INSTITUTION; TODO: INTEGRATE WITH IT */}
                <TextInput label="Card Profile" placeholder="000" required />
                <TextInput label="Card Number" placeholder="0000000000000000000000" required />
                <TextInput label="Description" placeholder="Description" />
                <TextInput label="Status" placeholder="A" required />
                <TextInput label="Key Profile" placeholder="000" required />
                <TextInput label="Expiry Date" placeholder="0000" required />
                <TextInput label="Track I" placeholder="Track I" required />
                <TextInput label="Track II" placeholder="Track II" required />
                <TextInput label="PIN" placeholder="0000" required />
                <TextInput label="PVV Data" placeholder="0000" required />
                <TextInput label="CVV1" placeholder="000" required />
                <TextInput label="ICVV" placeholder="000" required />
                <TextInput label="CVV2" placeholder="000" required />
                <Button fullWidth mt="xl">
                    Submit
                </Button>
            </Paper>
        </Container>
    )
};