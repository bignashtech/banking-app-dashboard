
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat','Sun'],
    datasets: [{
        label: 'Stock Chart',
        data: [12, 19, 7, 5, 10, 15, 6],
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});