def study_schedule(permanence_period, target_time):
    count_students = 0

    if target_time is None:
        return None

    for first, second in permanence_period:
        if type(first) is not int or type(second) is not int:
            return None
        if first <= target_time <= second:
            count_students += 1

    return count_students
