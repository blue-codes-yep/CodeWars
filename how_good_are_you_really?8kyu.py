def better_than_average(class_points, your_points):
    sum_of = sum(class_points)
    average = sum_of / len(class_points)
    
    if your_points > average:
        return True
    else:
        return False
