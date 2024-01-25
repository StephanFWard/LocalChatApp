# LocalChatApp

LocalChatApp is a simple chat application with a Rails backend and a React frontend.

**Installation Steps**:

Make sure you have Ruby version 3.2.2p53 installed. You can use a version manager like RVM or rbenv.
Install Bundler version 2.4.10: gem install bundler -v 2.4.10
**Run bundle install** to install the dependencies.

**Database Setup**:

**Ensure you have SQLite3 installed**.
Run **rails db:create** to create the database.
Run **rails db:migrate** to apply migrations.

**Starting Backend**:

Start the Rails server with **rails server**

Visit **http://localhost:3000** in your browser to confirm the backend is running.
Frontend Setup:

If you're using assets, run **rails assets:precompile** to compile your assets.
Running Tests:

If you have tests, run them using rails test or **bundle exec rspec** (depending on your testing framework).
Using **Selenium** for Testing:

If you're using Selenium for testing with Capybara, ensure you have the correct version of selenium-webdriver.
Run your tests using rails test or bundle exec rspec.
**Web Console and Debugging:**

For debugging, consider using web-console and debug gems. Add binding.pry in your code where you want to start debugging.
