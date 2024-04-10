import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, Checkbox, Form} from 'semantic-ui-react';
import {api} from '../../service/https/http';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  agreed: boolean;
}

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (true) {
      api.post({
        endpoint: 'user',
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        },
      });
    } else {
      console.log('Please agree to the Terms and Conditions.');
    }
  };

  return (
    <div style={{width: '70%', margin: 'auto', marginTop: 100}}>
      <h1 style={{textAlign: 'center'}}>Login Now!</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder='First Name'
            {...register('firstName', {required: true})}
          />
          {errors.firstName && <span>This field is required</span>}
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            {...register('lastName', {required: true})}
          />
          {errors.lastName && <span>This field is required</span>}
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' {...register('email', {required: true})} />
          {errors.email && <span>This field is required</span>}
        </Form.Field>

        <Form.Field>
          <Checkbox
            label='I agree to the Terms and Conditions'
            {...register('agreed')}
            // checked={false}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};
