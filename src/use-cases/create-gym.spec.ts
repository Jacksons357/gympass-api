import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'
import { beforeEach, describe, expect, it } from 'vitest'

let gymsRespository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRespository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRespository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript GYM',
      description: null,
      latitude: -23.5536384,
      longitude: -46.2946304,
      phone: null,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
