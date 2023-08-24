import api from '../configs/api';
import AppConfig from '../configs/app';
import ApiErrorHandler from '../libs/api-error-handler';
import { BlogModel } from '../models/blog-model';
import { PaginationModel } from '../models/pagination-model';
import ResponseModel from '../models/response-model';
import ServiceModel from '../models/service-model';

export default class BlogRepository {
  async getLastestBlog(): Promise<ResponseModel<BlogModel>> {
    try {
      const response = await api().get('lastest-blogs');

      if (response.status === AppConfig.HTTP_OK) {
        return response.data;
      }

      throw ApiErrorHandler.notResponse200Handler(response);
    } catch (error) {
      throw ApiErrorHandler.errorHandler(error);
    }
  }

  async getBlogs(): Promise<ResponseModel<PaginationModel<ServiceModel[]>>> {
    try {
      const response = await api().get('blogs');

      if (response.status === AppConfig.HTTP_OK) {
        return response.data;
      }

      throw ApiErrorHandler.notResponse200Handler(response);
    } catch (error) {
      throw ApiErrorHandler.errorHandler(error);
    }
  }

  async getBlogBySlug(slug: string): Promise<ResponseModel<PaginationModel<ServiceModel[]>>> {
    try {
      const response = await api().get(`blogs/${slug}`);

      if (response.status === AppConfig.HTTP_OK) {
        return response.data;
      }

      throw ApiErrorHandler.notResponse200Handler(response);
    } catch (error) {
      throw ApiErrorHandler.errorHandler(error);
    }
  }
}
