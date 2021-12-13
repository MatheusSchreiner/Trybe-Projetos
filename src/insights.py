from src.jobs import read


def get_unique_job_types(path):
    list_file = read(path)
    return {item['job_type'] for item in list_file if item['job_type'] != ''}


def filter_by_job_type(jobs, job_type):
    return [job for job in jobs if job['job_type'] == job_type]


def get_unique_industries(path):
    list_file = read(path)
    return {item['industry'] for item in list_file if item['industry'] != ''}


def filter_by_industry(jobs, industry):
    return [job for job in jobs if job['industry'] == industry]


def get_max_salary(path):
    list_file = read(path)
    salary = {int(item['max_salary'])
              for item in list_file if item['max_salary'].isnumeric()}
    return max(salary)


def get_min_salary(path):
    list_file = read(path)
    salary = {int(item['min_salary'])
              for item in list_file if item['min_salary'].isnumeric()}
    return min(salary)


def matches_salary_range(job, salary):
    max_salary, min_salary = job.get('max_salary'), job.get('min_salary')

    if (type(max_salary) != int or type(min_salary) != int or
            type(salary) != int or min_salary > max_salary):
        raise ValueError
    return min_salary <= salary <= max_salary


def filter_by_salary_range(jobs, salary):
    response = []

    for job in jobs:
        try:
            if matches_salary_range(job, salary):
                response.append(job)
        except ValueError:
            pass

    return response
