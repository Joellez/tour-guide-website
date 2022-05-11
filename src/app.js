function book() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let date = prompt("What date/s and time/s are you looking to book for?");
  let group = prompt("Are you booking for a group?");
  group = group.toLowerCase();
  if (group === "yes") {
    alert(
      `Thank you ${name}, we look forward to welcoming your group to London. We'll be in contact soon! 💂🏻‍♀️💂‍♂️`
    );
  } else
    alert(
      `Thank you ${name}, we offer tours for both individuals and groups. We'll be in contact soon! 💂🏻‍♀️💂‍♂️`
    );
}

let bookButton = document.querySelector(".book-button");
bookButton.addEventListener("click", book);
