const solution = my_string => [...my_string].filter(a => ['a', 'e', 'i', 'o', 'u'].includes(a) ? false : true).join(
"")