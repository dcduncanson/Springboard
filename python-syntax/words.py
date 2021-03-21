def print_upper_words(words):
    """ Print out a list of words on seperate lines and make them all uppercase.

        For example:
        print_upper_words(["I", "am", "cool"])

        Should print:
        I
        AM
        COOL
    """

    for word in words:
        print(word.upper())


def print_upper_e_words(words):
    """
        Print out a list of words that start with 'e' or 'E' on a seperate line and make them all uppercase.

        For example:
        print_upper_e_words(["egg", "Elephant", "cool", "ice cream"])

        Should print:
        EGG
        ELEPHANT
    """

    for word in words:
        if word.startswith('e') or word.startswith('E'):
            print(word.upper())


def print_certain_upper_words(words, must_start_with):
    """
        Print out a list of words that start with certain letters on a seperate line and make them all uppercase.

        For example:
        print_certain_upper_words(["hello", "hey", "goodbye", "yo", "yes"], must_start_with={"h", "y"})

        Should print:
        HELLO
        HEY
        YO
        YES
    """

    for word in words:
        for char in must_start_with:
            if word.startswith(char):
                print(word.upper())
                break
