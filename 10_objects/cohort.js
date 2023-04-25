const cohort = {
    name: 'March2023',
    id: 1234,
    students: ['Natasha', 'Rachel', 'Hannah']
};

const cohortInfo = (cohort) => {
    console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`)
}
