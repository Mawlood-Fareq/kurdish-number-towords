// Convert Number
module.exports.convert = function convert(number, level = 0) {
  var ones = ["یەک", "دوو", "سێ", "چوار", "پێنج", "شەش", "حەوت", "هەشت", "نۆ"];
  var ten = ["دە", "یازدە", "دوازدە", "سیازدە", "چواردە", "پازدە", "شازدە", "حەڤدە", "هەژدە", "نۆزدە"];
  var tens = ["بیست", "سی", "چل", "پەنجا", "شەست", "حەفتا", "هەشتا", "نەوەد"];
  var hundreds = ["سەد", "دوو سەد", "سێ سەد", "چوار سەد", "پێنج سەد", "شەش سەد", "حەوت سەد", "هەشت سەد", "نۆ سەد"];

  let result = "";

  if (number === null)
    return "";

  if (number < 0) {
    number = number * -1;
    return "سالب " + convert(number, level);
  }

  if (number == 0) {
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

  if (number < 10) {
    result += ones[number - 1];
  } else if (number < 20) {
    result += ten[number - 10];
  } else if (number < 100) {
    result += tens[Math.floor(number / 10) - 2] + convert(number % 10, level + 1);
  } else if (number < 1000) {
    result += hundreds[Math.floor(number / 100) - 1] + convert(number % 100, level + 1);
  } else if (number < 1000000) {
    result += (number / 1000 < 2 ? '' : convert(Math.floor(number / 1000), level)) + " هەزار" + convert(number % 1000, level + 1);
  } else if (number < 1000000000) {
    result += convert(Math.floor(number / 1000000), level) + " ملیۆن" + convert(number % 1000000, level + 1);
  } else if (number < 1000000000000) {
    result += convert(Math.floor(number / 1000000000), level) + " میلیارد" + convert(number % 1000000000, level + 1);
  } else if (number < 1000000000000000) {
    result += convert(Math.floor(number / 1000000000000), level) + " تریلیۆن" + convert(number % 1000000000000, level + 1);
  }
  return result;
}

// Convert Currency
module.exports.convertCurrency = function convertCurrency(number, currencyUnit = "دینار", decimalUnit = "فلس") {

  function convert(number, level = 0) {
    var ones = ["یەک", "دوو", "سێ", "چوار", "پێنج", "شەش", "حەوت", "هەشت", "نۆ"];
    var ten = ["دە", "یازدە", "دوازدە", "سیازدە", "چواردە", "پازدە", "شازدە", "حەڤدە", "هەژدە", "نۆزدە"];
    var tens = ["بیست", "سی", "چل", "پەنجا", "شەست", "حەفتا", "هەشتا", "نەوەد"];
    var hundreds = ["سەد", "دوو سەد", "سێ سەد", "چوار سەد", "پێنج سەد", "شەش سەد", "حەوت سەد", "هەشت سەد", "نۆ سەد"];

    let result = "";

    if (number === null)
      return "";

    if (number < 0) {
      number = number * -1;
      return "سالب " + convert(number, level);
    }

    if (number == 0) {
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

    if (number < 10) {
      result += ones[number - 1];
    } else if (number < 20) {
      result += ten[number - 10];
    } else if (number < 100) {
      result += tens[Math.floor(number / 10) - 2] + convert(number % 10, level + 1);
    } else if (number < 1000) {
      result += hundreds[Math.floor(number / 100) - 1] + convert(number % 100, level + 1);
    } else if (number < 1000000) {
      result += (number / 1000 < 2 ? '' : convert(Math.floor(number / 1000), level)) + " هەزار" + convert(number % 1000, level + 1);
    } else if (number < 1000000000) {
      result += convert(Math.floor(number / 1000000), level) + " ملیۆن" + convert(number % 1000000, level + 1);
    } else if (number < 1000000000000) {
      result += convert(Math.floor(number / 1000000000), level) + " میلیارد" + convert(number % 1000000000, level + 1);
    } else if (number < 1000000000000000) {
      result += convert(Math.floor(number / 1000000000000), level) + " تریلیۆن" + convert(number % 1000000000000, level + 1);
    }
    return result;
  }

  var _split = number.toString().split(".")

  if (_split.length > 1) {
    return `${convert(_split[0])} ${currencyUnit} و ${convert(_split[1])} ${decimalUnit}`
  } else {
    return `${convert(_split[0])} ${currencyUnit}`
  }
}
