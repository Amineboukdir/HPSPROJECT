import m from "../assets/mastercard.jpeg"
import v from "../assets/visa.jpeg"
import {
  TextInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Grid
} from '@mantine/core';
import { useEffect } from 'react';
import classes from './card-profile.module.css';

export const CardProfile = () => {
  useEffect(() => {
      document.body.classList.add(classes.customBody);
      document.documentElement.style.fontSize = '16px';
      return () => {
          document.body.classList.remove(classes.customBody);
      };
  }, []);

  return (
      <Container className={classes.mainContainer}>
          <Title ta="center" className={classes.title}>
              Card Profile Form
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
              Please fill the form below
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md" className={classes.paper}>
              <TextInput label="Institution Id" placeholder="000" required className={classes.textInput} />
              <Grid>
                  <Grid.Col span={6}>
                      <TextInput label="Card Profile" placeholder="000" required className={classes.textInput} />
                  </Grid.Col>
                  <Grid.Col span={6}>
                      <div className={classes.inputWithLogo}>
                          <TextInput label="Card Number" placeholder="0000000000000000000000" required className={classes.textInput} />
                          <img src={v} alt="Visa" className={classes.cardLogo} />
                          <img src={m} alt="MasterCard" className={classes.cardLogo} />
                      </div>
                  </Grid.Col>
              </Grid>
              <TextInput label="Description" placeholder="Description" className={classes.textInput} />
              <Grid>
                  <Grid.Col span={6}>
                      <TextInput label="Status" placeholder="A" required className={classes.textInput} />
                  </Grid.Col>
                  <Grid.Col span={6}>
                      <TextInput label="Key Profile" placeholder="000" required className={classes.textInput} />
                  </Grid.Col>
              </Grid>
              <Grid>
                  <Grid.Col span={6}>
                      <TextInput label="Expiry Date" placeholder="0000" required className={classes.textInput} />
                  </Grid.Col>
                  <Grid.Col span={6}>
                      <TextInput label="Track I" placeholder="Track I" required className={classes.textInput} />
                  </Grid.Col>
              </Grid>
              <Grid>
                  <Grid.Col span={6}>
                      <TextInput label="Track II" placeholder="Track II" required className={classes.textInput} />
                  </Grid.Col>
                  <Grid.Col span={6}>
                      <TextInput label="PIN" placeholder="0000" required className={classes.textInput} />
                  </Grid.Col>
              </Grid>
              <Grid>
                  <Grid.Col span={6}>
                      <TextInput label="PVV Data" placeholder="0000" required className={classes.textInput} />
                  </Grid.Col>
                  <Grid.Col span={6}>
                      <TextInput label="CVV1" placeholder="000" required className={classes.textInput} />
                  </Grid.Col>
              </Grid>
              <Grid>
                  <Grid.Col span={6}>
                      <TextInput label="ICVV" placeholder="000" required className={classes.textInput} />
                  </Grid.Col>
                  <Grid.Col span={6}>
                      <TextInput label="CVV2" placeholder="000" required className={classes.textInput} />
                  </Grid.Col>
              </Grid>
              <Button className={classes.button} fullWidth>
                  Submit
              </Button>
          </Paper>
      </Container>
  );
};