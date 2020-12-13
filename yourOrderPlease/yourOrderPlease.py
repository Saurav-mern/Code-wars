def order(sentence):
  words_in_list = sentence.split()
  ordered_words_in_increasing_number = sorted(words_in_list, key = numbers_from_words)
  return (" ").join(ordered_words_in_increasing_number) 

def numbers_from_words(word):
  for letter in word:
    if letter.isdigit():
      return int(letter) #will return numbers from here and this number with decide the order in sorted function, for eg if we return 1 from here that will come first in sorted function
  return None