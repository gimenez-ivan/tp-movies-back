export const isCatalogOwner = async (user, catalog) => {
  return user.id === catalog.userId || user.roleName === "admin";
};

export const isReviewOwner = async (user, review) => {
  return user.id === review.userId || user.roleName === "admin";
}

export const isProfileOwner = async (user, profile) => {
  return user.id === profile.userId || user.roleName === "admin";
}
