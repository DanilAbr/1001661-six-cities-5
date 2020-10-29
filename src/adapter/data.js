export const convertData = (originalData) => {
  return {
    bedrooms: originalData.bedrooms,
    city: {
      name: originalData.city.name,
      location: {
        latitude: originalData.city.location.latitude,
        longitude: originalData.city.location.longitude,
        zoom: originalData.city.location.zoom,
      }
    },
    description: originalData.description,
    goods: originalData.goods,
    host: {
      id: originalData.host.id,
      isPro: originalData.host.is_pro,
      name: originalData.host.name,
      avatarUrl: originalData.host.avatar_url,
    },
    id: originalData.id,
    images: originalData.images,
    isFavorite: originalData.is_favorite,
    isPremium: originalData.is_premium,
    location: {
      latitude: originalData.location.latitude,
      longitude: originalData.location.longitude,
      zoom: originalData.location.zoom,
    },
    maxAdults: originalData.max_adults,
    previewImage: originalData.preview_image,
    price: originalData.price,
    rating: originalData.rating,
    title: originalData.title,
    type: originalData.type,
  };
};
