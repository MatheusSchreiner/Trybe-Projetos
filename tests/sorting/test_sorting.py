from src.sorting import sort_by


def test_sort_by_criteria():
    data = [
        {
            "job_title": "fake_job_001",
            "min_salary": "2048",
            "max_salary": "4096",
            "date_posted": "2020-05-07"
        },
        {
            "job_title": "fake_job_010",
            "min_salary": "6144",
            "max_salary": "8192",
            "date_posted": "2020-07-10"
        },
        {
            "job_title": "fake_job_011",
            "min_salary": "3072",
            "max_salary": "5120",
            "date_posted": "2020-09-12"
        },
    ]

    criteria = 'max_salary'
    sort_by(data, criteria)
    assert data[0]['max_salary'] == '8192'
    assert data[1]["max_salary"] == "5120"
    assert data[2]["max_salary"] == "4096"

    criteria = "min_salary"
    sort_by(data, criteria)
    assert data[0]["min_salary"] == "2048"
    assert data[1]["min_salary"] == "3072"
    assert data[2]["min_salary"] == "6144"

    criteria = "date_posted"
    sort_by(data, criteria)
    assert data[0]["date_posted"] == "2020-09-12"
    assert data[1]["date_posted"] == "2020-07-10"
    assert data[2]["date_posted"] == "2020-05-07"
