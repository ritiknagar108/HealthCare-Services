// updateService.js

export const updateService = (services, updatedService) => {
    return services.map((service) =>
      service.key === updatedService.key ? updatedService : service
    );
  };
  