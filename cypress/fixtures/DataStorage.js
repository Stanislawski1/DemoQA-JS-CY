const linksToTest = [
    { name: 'Home', selector: '#simpleLink', expectedUrl: 'https://demoqa.com/' },
    { name: 'Created', selector: '#created', expectedUrl: 'https://demoqa.com/' }, // Для динамических ссылок можно проверять статус
    { name: 'No Content', selector: '#no-content', expectedUrl: 'https://demoqa.com/' }
];