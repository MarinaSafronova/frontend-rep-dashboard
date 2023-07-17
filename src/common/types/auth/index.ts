import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export interface IPropsLogin<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    navigate: (to: string) => void
    register: UseFormRegister<any>
    errors: FieldErrors<TFieldValues>
    loading: boolean
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    navigate: (to: string) => void
    register: UseFormRegister<any>
    errors: FieldErrors<TFieldValues>
    loading: boolean
}



export interface IPublicUser {
  id: number | null,
  firstName: string,
  userName: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  watchlist: [IWatchList]
}

export interface IAuthState {
  user: {
    user: IPublicUser,
    token: string
  },
  isLogged: boolean,
  isLoading: boolean
}

interface IWatchList {
  id: number | null,
  name: string,
  assetId: string,
  createdId: string,
  updatedAt: string,
  user: number | null
}

export interface ILoginData {
  email: string
  password: string
}

export interface IRegisterData {
  email: string
  password: string
  firstName: string
  username: string
}