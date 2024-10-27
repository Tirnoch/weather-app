function dataExtractor(object) {
  let data = object.days[0];
  let condition = data.conditions;
  let maxTemp = data.tempmax;
  let minTemp = data.tempmin;
  let icon = data.icon;

  //   console.log(
  //     `I'm extracting:\nCondition: ${condition}\nMax Temp: ${maxTemp}\nMin Temp: ${minTemp}`,
  //     data
  //   );
  return { condition, maxTemp, minTemp, icon };
}

export default dataExtractor;
