# Currency Converter 💱

A simple and responsive **Currency Converter** built with **HTML, CSS, and JavaScript**.
The application fetches live exchange rates from a currency API and converts an entered amount from one currency to another.

## 🚀 Features

* Convert currencies using live exchange rates
* Select **From** and **To** currencies
* Automatically update currency flags
* Validate the entered amount
* Fetch exchange rates using `fetch()` and `async/await`
* Responsive and clean user interface

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **Currency API**
* **Flags API**
* **Font Awesome**

## 🔗 APIs

### Currency API

[Currency API](https://latest.currency-api.pages.dev/)

Used to fetch the latest exchange rates.

### Flags API

[Flags API](https://flagsapi.com/)

Used to display the flag of the selected currency's country.

## 📂 Project Structure

```text
Currency-Converter/
│
├── index.html
├── style.css
├── app.js
├── codes.js
└── README.md
```

## ⚙️ How It Works

1. Select the source currency.
2. Select the target currency.
3. Enter the amount.
4. Click **Exchange Rates**.
5. JavaScript sends a request to the Currency API.
6. The exchange rate is retrieved using `async/await`.
7. The amount is multiplied by the exchange rate.
8. The converted amount is displayed on the page.

## 📸 Preview

Add a screenshot of your project here:

```md
![Currency Converter Screenshot](./screenshot.png)
```

## 🧠 What I Learned

While building this project, I practiced:

* DOM manipulation
* Events and event listeners
* Working with `<select>` elements
* JavaScript objects and bracket notation
* Fetch API
* Promises
* `async/await`
* JSON data
* API URL construction
* Basic form validation
* Dynamic DOM updates

## ▶️ Run Locally

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Open the project folder and launch `index.html` in your browser.

## 👨‍💻 Author

**Irbaz Abid**

BS Computer Science Student | Aspiring Full-Stack Developer

GitHub: [@irbaz-abid](https://github.com/irbaz-abid)

---

⭐ If you find this project useful, consider giving the repository a star!
