const handleFeatures = (location) => {
  if (location.hostname === 'localhost') {
    return {
      workCourse: true,
    }
  }
  return {
    workCourse: false,
  }
}

export default handleFeatures
