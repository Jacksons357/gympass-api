import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterUseCase } from '../register'

export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const registerUserCase = new RegisterUseCase(usersRepository)

  return registerUserCase
}
