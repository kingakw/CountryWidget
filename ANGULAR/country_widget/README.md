# Widgets Dashboard
Widgets Dashboard - Angular Fundamentals

## Resources: 
- [Bootstrap documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap icons](https://icons.getbootstrap.com/)
- [Angular documentation](https://angular.io/docs)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [RxJS documentation](https://rxjs.dev/guide/overview)

## APIs:

- [Weather](https://open-meteo.com/en/docs)
- [Countries](https://restcountries.com/)
- [Crypto](https://docs.coincap.io/)
- [Chuck Norris Jokes](https://api.chucknorris.io/)

## Widgets:

### Weather

- **Widget details**
   -  display current weather *( temp, wind, index UV, etc. )*
- **Widget listing**
   -  display forecast weather cards *( date, max temp, min temp, etc.  )*
   -  on click, expand the selected card for more weather details
- **Admin panel**
   - select new country / city
   - select forecast period

### Chuck Noris Jokes

- **Widget Details**
   - display random joke
   - display favorite categories
   - on click, display a random joke from selected category
   - allow the user to mark joke as favorite
- **Widget listing**
   - display favorite jokes cards *( catgory + joke )*
- **Admin panel**
   - select favorite categories to display in widget details
   - remove jokes from the favorite list

### Countries

- **Widget details**
   - display info about country *( name, flag, currency, population, etc. )*
- **Widget listing**
   - display border countries cards *( flag, name )*
   - on click, display selected country details in the widget details
- **Admin panel**
   - select new country
   - select country details *( native name, region, domain, languages, etc. )*

### Crypto

- **Widget details** 
   - display detail info about main currency *( name, symbol, value, changePercent ↑ ↓, etc. )*
- **Widget listing** 
   - display currency cards *( name, changePercent ↑ ↓ )*
   - on click, expand the selected card for more currency details
- **Admin panel** 
   - select main currency
   - select number of currencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# CountriesWidget
