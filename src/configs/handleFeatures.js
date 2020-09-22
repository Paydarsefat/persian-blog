const handleFeatures = (location) => {
  if (location.hostname === 'localhost') {
    return {
      workCourse: true,
    }
  }
  return {
    workCourse: true,
  }
}

export default handleFeatures
