// Email validation using regex pattern
function validateEmailWithRegex(email) {
  // Basic regex pattern for email validation
  const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexPattern.test(email);
}

// Example usage of regex validation
const emailToTest = "example@example.com";
console.log(`Is "${emailToTest}" a valid email?`, validateEmailWithRegex(emailToTest));

// Advanced email validation using a third-party API
async function validateEmailWithAPI(email) {
  const apiKey = 'your-api-key-here'; // Replace with your actual API key
  const apiUrl = `https://emailvalidationapi.com/api/v1?apikey=${apiKey}&email=${encodeURIComponent(email)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.isValid) {
      console.log(`"${email}" is a valid email.`);
    } else {
      console.log(`"${email}" is not a valid email.`);
    }
  } catch (error) {
    console.error('Error validating email:', error);
  }
}

// Example usage of API validation
validateEmailWithAPI(emailToTest);