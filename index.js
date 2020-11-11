function convert(number) {
  var ones = ["یەک", "دوو", "سێ", "چوار", "پێنج", "شەش", "حەوت", "هەشت", "نۆ"];
  var ten = ["ده", "یازده", "دوازدە", "سیازده", "چوارده", "پازده", "شازده", "حەڤده", "هەژده", "نۆزده"];
  var tens = ["بیست", "سی", "چل", "پەنجا", "شەست", "حەفتا", "هەشتا", "نەوەد"];
  var hundreds = ["سەد", "دوو سەد", "سێ سەد", "چوار سەد", "پێنج سەد", "شەش سەد", "حەوت سەد", "هەشت سەد", "نۆ سەد"];
  // thousands

  let result = "";

  if (num === null)
  return "";

  if (num < 0) {
    num = num * -1;
    return "سالب " + convert(num, level);
  }

  if (num === 0) {
    if (level === 0) {
      return "سفر";
    } else {
      return "";
    }
  }

  if (level > 0) {
    result += " و ";
    level -= 1;
  }

  if (num < 10) {
    result += ones[num - 1];
  } else if (num < 20) {
    result += ten[num - 10];
  } else if (num < 100) {
    result += tens[Math.floor(num / 10) - 2] + convert(num % 10, level + 1);
  } else if (num < 1000) {
    result += hundreds[Math.floor(num / 100) - 1] + convert(num % 100, level + 1);
  } else if (num < 1000000) {
    result += (num / 1000 < 2 ? '' : convert(Math.floor(num / 1000), level)) + " هەزار" + convert(num % 1000, level + 1);
  } else if (num < 1000000000) {
    result += convert(Math.floor(num / 1000000), level) + " ملیۆن" + convert(num % 1000000, level + 1);
  } else if (num < 1000000000000) {
    result += convert(Math.floor(num / 1000000000), level) + " میلیارد" + convert(num % 1000000000, level + 1);
  } else if (num < 1000000000000000) {
    result += convert(Math.floor(num / 1000000000000), level) + " تریلیۆن" + convert(num % 1000000000000, level + 1);
  }

  return result;

}

module.exports.convert = convert(number)