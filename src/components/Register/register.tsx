import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'
import toast from 'react-hot-toast'
import { api } from '../../service/https/http'

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword?: string
  agreed?: boolean
}

export const RegisterPage: React.FC = () => {
  const {
    register,
    setValue,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<FormData>()
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true)

  const registerUser = async (data: FormData): Promise<FormData> => {
    const response = await api
      .requestHandler({
        method: 'GET',
        endpoint: 'user',
        body: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password
        }
      })
      .catch((error) => {
        throw error
      })
    return response
  }

  const onSubmit = async (data: FormData): Promise<void> => {
    if (data.agreed !== undefined && data.agreed && passwordMatch) {
      setIsDisabled(true)
      try {
        await toast.promise(registerUser(data), {
          loading: <b>Registering...</b>,
          success: <b>Successfully Registered</b>,
          error: <b>Could not save.</b>
        })
      } catch (error) {
        toast.error('An error occurred while registering.')
      } finally {
        setIsDisabled(false)
      }
    } else {
      toast.error(
        'Please agree to the Terms and Conditions and ensure passwords match.'
      )
    }
  }

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target
    setValue(name as keyof FormData, value)
    void trigger(name as keyof FormData)
    const confirmPassword = getValue('confirmPassword')
    setPasswordMatch(confirmPassword === value)
  }

  const getValue = (fieldName: keyof FormData): string => {
    const field = document.querySelector<HTMLInputElement>(
      `input[name="${fieldName}"]`
    )
    return field != null ? field.value : ''
  }

  return (
    <div style={{ width: '70%', margin: 'auto', marginTop: 100 }}>
      <h1 style={{ textAlign: 'center' }}>Register Now!</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>First Name</label>
          <Input
            placeholder='First Name'
            {...register('firstName', { required: true })}
            onChange={async (e, { name, value }) => {
              setValue(name, value)
              await trigger(name as keyof FormData)
            }}
          />
          {errors.firstName != null && <span>This field is required</span>}
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <Input
            placeholder='Last Name'
            {...register('lastName', { required: true })}
            onChange={async (e, { name, value }) => {
              setValue(name, value)
              await trigger(name as keyof FormData)
            }}
          />
          {errors.lastName != null && <span>This field is required</span>}
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input
            placeholder='Email'
            {...register('email', { required: true })}
            onChange={async (e, { name, value }) => {
              setValue(name, value)
              await trigger(name as keyof FormData)
            }}
          />
          {errors.email != null && <span>This field is required</span>}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            type='password'
            placeholder='Password'
            {...register('password', { required: true })}
            onChange={handlePasswordChange}
          />
          {errors.password != null && <span>This field is required</span>}
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <Input
            type='password'
            placeholder='Confirm Password'
            {...register('confirmPassword', { required: true })}
            onChange={handlePasswordChange}
          />
          {!passwordMatch && <span>Passwords do not match</span>}
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='I agree to the Terms and Conditions'
            {...register('agreed')}
            onChange={(e, { name, checked }) => {
              setValue('agreed', checked)
            }}
          />
        </Form.Field>
        <Button disabled={isDisabled} type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
