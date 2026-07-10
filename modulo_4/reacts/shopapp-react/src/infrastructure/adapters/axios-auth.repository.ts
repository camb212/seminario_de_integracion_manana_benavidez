// src/infrastructure/adapters/axios-category.repository.ts
import { apiClient } from '@/infrastructure/http/axios-client'
import { parseApiError } from '@/infrastructure/http/parse-api-error'
import type { CategoryRepository } from '@/domain/ports/category.repository'
import type { Category } from '@/domain/entities/category.entity'
import type { PaginatedResult } from '@/domain/entities/paginated-result.entity'

export class AxiosCategoryRepository implements CategoryRepository {
  /** * GET /categories/ — Obtiene el listado plano de categorías.
   * Solicita un page_size alto (100) para saltarse temporalmente la paginación 
   * y servir los filtros del catálogo público en una sola petición.
   */
  async getCategories(): Promise<Category[]> {
    try {
      const { data } = await apiClient.get<PaginatedResult<Category>>('/categories/', {
        params: { page_size: 100 },
      })
      
      return data.results
    } catch (err) {
      throw parseApiError(err)
    }
  }
}