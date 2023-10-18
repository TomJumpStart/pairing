export const findColour = (country) => {
  return countryColours[country][0];
};

export const darkBlue = '#3B3483',
     lightBlue = '#00A4E5',
       darkRed = '#CE001F',
         white = '#eeeeee',
     brightRed = '#FF164C',
     darkGreen = '#008A4F',
    lightGreen = '#0FC070',
   brightGreen = '#00B427',
        yellow = '#FFE500',
         black = '#000000',
        orange = '#FF821C',
          blue = '#0060B0',
    darkYellow = '#FFC900',
         spare = ["#FD7F6F", "#7EB0D5", "#B2E061", "#BD7EBE", "#FFB55A", "#FFEE65", "#BEB9DB", "#FDCCE5", "#8BD3C7"];

const countryColours = {
            'Australia': [darkBlue, darkRed, white],
            'Austria': [brightRed, white],
            'Brazil': [darkGreen, yellow, darkBlue],
            'Canada': [brightRed, white],
            'China': [brightRed, darkYellow],
            'Czech Republic': [blue, darkRed, white],
            'Denmark': [darkRed, white],
            'Estonia': [black, blue, white],
            'Ethiopia': [lightBlue, darkGreen, darkRed, darkYellow],
            'Finland': [darkBlue, white],
            'France': [blue, brightRed, white],
            'Germany': [darkYellow, black, brightRed],
            'Ghana': [darkGreen, darkYellow, darkRed, black],
            'Greece': [blue, white],
            'Hungary': [darkGreen, darkRed, white],
            'Iceland': [blue, darkRed, white],
            'India': [lightGreen, orange, darkBlue],
            'Indonesia': [brightRed, white],
            'Ireland': [lightGreen, orange],
            'Israel': [darkBlue, white],
            'Italy': [darkGreen, darkRed, white],
            'Jamaica': [brightGreen, yellow, black],
            'Japan': [brightRed, white],
            'Kenya': [darkGreen, darkRed, black],
            'Latvia': [darkRed, white],
            'Luxembourg': [lightBlue, brightRed],
            'New Zealand': [darkBlue, darkRed],
            'Nigeria': [darkGreen, white],
            'Norway': [darkBlue, brightRed],
            'Romania': [darkBlue, darkYellow, darkRed],
            'South Africa': [darkGreen, black, darkBlue, darkRed, white],
            'South Korea': [white, black, darkBlue, darkRed],
            'Spain': [darkRed, darkYellow],
            'Sweden': [blue, darkYellow],
            'Switzerland': [brightRed, white],
            'Turkey': [darkRed, white],
            'United Kingdom': [darkBlue, darkRed, white],
            'United States': [darkBlue, darkRed, white],
            'Vietnam': [brightRed, yellow],
        };
