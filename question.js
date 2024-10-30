
// Questions for each category
const questionsByCategory = {
    // questions for the Pipes and Cistens category
  "Pipes and Cistens":[


        {
            question: "If two pipes can fill a tank in 10 minutes and 15 minutes, respectively, how long will it take to fill the tank if both pipes are opened simultaneously?",
            options: ["5 minutes", "6 minutes", "8 minutes", "12 minutes"],
            answer: "6 minutes"
        },
        {
            question: "A cistern has a leak that would empty it in 4 hours. If a tap is turned on, which admits 6 liters per minute into the cistern, it is emptied in 8 hours. What is the capacity of the cistern?:",
            options: ["2880 liters", "1280 liters", "3000 liters", "1200 liters"],
            answer: "2880 liters"
        },
        {
            question: "Pipe A can fill a tank in 12 hours while pipe B can fill it in 16 hours. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["7.9 hours", "6 hours", "9.6 hours", "10 hours"],
            answer: "9.6 hours"
        },
        {
            question: "Two pipes can fill a tank in 20 and 30 minutes, respectively. If both pipes are opened simultaneously, how much time will it take to fill the tank?",
            options: ["24 minutes", "34 minutes", "20 minutes", "30 minutes"],
            answer: "24 minutes"
        },
        {
            question: "A cistern is normally filled in 8 hours but takes 10 hours because of a leak. If the cistern is full, how much time will the leak take to empty it?",
            options: ["50 hours", "38 hours", "52 hours", "40 hours"],
            answer: "40 hours"
        },
        {
            question: "If three pipes can fill a tank in 12, 15, and 20 hours, respectively, how long will it take to fill the tank if all three pipes are opened together?",
            options: ["3 hours", "4 hours", "2.66 hours", "4.56 hours"],
            answer: "2.66 hours"
        },
        {
            question: "A cistern is filled by two pipes in 10 and 15 hours, respectively. However, due to a leak at the bottom, it takes 5 hours longer to fill the cistern. How much time will the leak take to empty the full cistern?",
            options: ["20 hours", "30 hours", "22 hours", "40 hours"],
            answer: "20 hours"
        },
        {
            question: "Pipe A can fill a tank in 6 hours and pipe B can fill it in 4 hours. If both pipes are opened and the tank is 1/3rd empty, how long will it take to fill the tank completely?",
            options: ["1.5 hours", "1 hours", "4 hours", "5.5 hours"],
            answer: "1.5 hours"
        },
        {
            question: "Two pipes fill a tank in 10 hours and 15 hours, respectively. A waste pipe can empty it in 20 hours. If all three are opened simultaneously, in how much time will the tank be filled?",
            options: ["5 hours", "7 hours", "5.56 hours", "6.66 hours"],
            answer: "6.66 hours"
        },
        {
            question: "A cistern can be filled by one pipe in 20 hours and emptied by another in 30 hours. If both pipes are opened together, how long will it take to fill the cistern?",
            options: ["90 hours", "30 hours", "60 hours", "50 hours"],
            answer: "60 hours"
        }
    ],

    // questions for the Probobility category
    Probobility: [
        {
            question: "If a coin is flipped three times, what is the probability of getting exactly two heads?",
            options: ["1/4", "1/8", "3/8", "1/4"],
            answer: "3/8"

        },
        {
            question: "A die is rolled. What is the probability of getting an even number?",
            options: ["1/2", "3/2", "5/3", "7/6"],
            answer: "1/2"

        },
        {
            question: "Two cards are drawn from a pack of 52 cards without replacement. What is the probability that both are aces?",
            options: ["1/222", "1/221", "1/123", "2/123"],
            answer: "1/221"
        },
        {
            question: "In a class of 30 students, 12 are girls. If a student is selected at random, what is the probability that the student is a boy?",
            options: ["2/5", "1/4", "2/4", "3/5"],
            answer: "3/5"
        },
        {
            question: "What is the probability of drawing a red card from a standard deck of 52 playing cards?",
            options: ["2/3", "1/2", "1/6", "2/5"],
            answer: "1/2"
        }
        ,
        {
            question: "A box contains 3 red balls, 5 green balls, and 2 blue balls. If one ball is drawn at random, what is the probability that it is blue?",
            options: ["2/3", "1/5", "1/3", "1/6"],
            answer: "1/5"
        },
        {
            question: "If two dice are rolled, what is the probability that the sum of the numbers is 7?",
            options: ["1/2", "1/5", "2/3", "1/6"],
            answer: "1/6"
        },
        {
            question: "What is the probability of drawing a heart from a standard deck of 52 playing cards?",
            options: ["2/3", "1/4", "1/3", "1/5"],
            answer: "1/4"
        }
        ,
        {
            question: "A box contains 4 red, 3 green, and 2 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both are red?",
            options: ["2/15", "1/23", "1/25", "2/20"],
            answer: "2/15"
        },
        {
            question: "If a card is drawn at random from a standard deck of 52 playing cards, what is the probability of drawing a face card (king, queen, or jack)?",
            options: ["1/13", "2/13", "3/13", "4/13"],
            answer: "3/13"
        }
    ],

    // questions for the Problem on Age category
    "Problem on Age": [
        {
            question: "John is twice as old as his sister. Five years ago, he was three times as old as she was then. How old is John now?",
            options: ["10 years", "15 years", "20 years", "25 years"],
            answer: "15 years"

        },
        {
            question: "The sum of the ages of a father and his son is 60 years. If the father's age is twice the son's age, what are their ages?",
            options: ["Father: 40 years, Son: 20 years", "Father: 20 years, Son: 40 years", "Father: 30 years, Son: 30 years", "Father: 45 years, Son: 15 years"],
            answer: "Father: 40 years, Son: 20 years"

        },
        {
            question: "Three years ago, the average age of a family of 5 members was 24 years. A baby was born 2 years ago. What is the present average age of the family?",
            options: ["22.8 years", "24 years", "24.8 years", "27 years"],
            answer: "24.8 years"
        },
        {
            question: "The present age of A is twice that of B. Ten years ago, A was three times as old as B was then. What are their present ages?",
            options: ["A:40 years, B: 20 years", "A:40 years, B: 30 years", "A:30 years, B: 20 years", "A:30 years, B: 20 years"],
            answer: "A:40 years, B: 20 years"
        },
        {
            question: "A mother is twice as old as her daughter. The difference between their ages is 20 years. What is the mother's age?",
            options: ["30 years", "60 years", "40 years", "50 years"],
            answer: "50 years"
        },
        {
            question: "A man is 24 years older than his son. In two years, his age will be twice the age of his son. What is the son's current age?",
            options: ["20 years", "21 years", "25 years", "27 years"],
            answer: "20 years"
        },
        {
            question: "The ages of two brothers are in the ratio 4:3. After 5 years, the ratio of their ages will be 5:4. What are their current ages?",
            options: ["20 years, 15 years", "24 years, 18 years", "16 years, 12 years", "28 years, 21 years"],
            answer: "16 years, 12 years"
        },
        {
            question: "Peter is 10 years younger than his brother. Eight years ago, the sum of their ages was 34. What is Peter's current age?",
            options: ["15 years", "16 years", "17 years", "18 years"],
            answer: "16 years"
        },
        {
            question: "Five years ago, the average age of a family of six members was 25 years. Two babies were born during the last five years. What is the present average age of the family?",
            options: ["20 years", "22 years", "27 years", "30 years"],
            answer: "30 years"
        },
        {
            question: "If the ages of A and B are in the ratio 5:7 and the difference between their ages is 10 years, what is the age of A?",
            options: ["25 years", "30 years", "35 years", "40 years"],
            answer: "25 years"
        }
    ],

    // questions for the Profit and Loss category
    "Profit and Loss": [
        {
            question: "If a man buys 12 oranges for Rs. 15 and sells them at 10 oranges for Rs. 15, what is his gain or loss percent?",
            options: ["20% loss", "30% gain", "25% loss", "25% gian"],
            answer: "25% loss"

        },
        {
            question: "A shopkeeper sells an item at 20% profit. If the cost price of the item is Rs. 500, what is the selling price?",
            options: ["Rs. 600", "Rs. 500", "Rs. 700", "Rs. 400"],
            answer: "Rs. 600"

        },
        {
            question: "If an article is sold at a loss of 25%, what is its selling price if the cost price is Rs. 800?",
            options: ["Rs. 300", "Rs. 400", "Rs. 500", "Rs. 600"],
            answer: "Rs. 600"
        },
        {
            question: "A man buys an article for Rs. 100 and sells it for Rs. 80. Calculate the percentage loss.",
            options: ["10%", "20%", "30%", "40%"],
            answer: "20%"
        },
        {
            question: "The cost price of 20 articles is the same as the selling price of X articles. If the profit is 25%, what is the value of X?",
            options: ["13", "14", "16", "20"],
            answer: "16"
        },
        {
            question: "A person sold a bicycle for Rs. 1,800 at a loss of 10%. What was the cost price of the bicycle?",
            options: ["Rs. 2,000", "Rs. 3,000", "Rs. 4,000", "Rs. 5,000"],
            answer: "Rs. 2,000"
        },
        {
            question: "If a man purchases 11 apples for Rs. 10 and sells them at the rate of 10 apples for Rs. 11, find his profit percentage.",
            options: ["16%", "31%", "21%", "34%"],
            answer: "21%"
        },
        {
            question: "A trader sells an item at a profit of 20%. If the cost price is Rs. 200, what is the selling price?",
            options: ["Rs. 230", "Rs. 220", "Rs. 240", "Rs. 245"],
            answer: "Rs. 240"
        },
        {
            question: "The cost price of an item is Rs. 300. If it is sold at a gain of 15%, what is the selling price?",
            options: ["Rs. 345", "Rs. 350", "Rs. 355", "Rs. 360"],
            answer: "Rs. 345"
        },
        {
            question: "A man bought a cow for Rs. 2,000 and sold it at a loss of 5%. What was the selling price?",
            options: ["Rs. 1,900", "Rs. 1,800", "Rs. 1,850", "Rs. 1,950"],
            answer: "Rs. 1,900"
        }

    ]
    // Add more categories and questions as needed
};
