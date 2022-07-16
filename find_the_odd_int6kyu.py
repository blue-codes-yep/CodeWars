def find_it(seq):
    counter = 0
    num = seq[0]
    
    for i in seq: 
        frequency = seq.count(i)
        if(frequency % 2):
            counter = frequency
            num = i
    return num
