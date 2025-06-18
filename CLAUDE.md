# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static web-based poker strategy quiz application that tests users' knowledge across 6 poker categories. The application is built with vanilla HTML, CSS, and JavaScript without any build process or dependencies.

## Architecture

The codebase is organized into 4 modular files:

- **index.html** - Main HTML structure with three screens: start, question, and results
- **styles.css** - Complete styling including responsive design and dark theme
- **questions.js** - Question data array with 35 questions across 6 categories (110 total points)
- **script.js** - Quiz logic, state management, and DOM manipulation

## Development Commands

Since this is a static site with no build process:

```bash
# Serve locally (any method works)
open index.html                    # Open directly in browser
python -m http.server 8000         # Python server
npx serve .                        # Node.js serve

# Deploy to GitHub Pages
git push origin master             # Auto-deploys via GitHub Pages
```

## Quiz Structure

The quiz follows a specific scoring and categorization system:

**Categories and Points:**
- Poker Math (25 pts) - Equity, pot odds, implied odds calculations
- Betting Strategy (18 pts) - Value betting, bluffing, protection concepts  
- Ranges & Categories (20 pts) - Four Categories framework, range construction
- Position (12 pts) - IP vs OOP play, positional ranges
- Balance & Exploits (20 pts) - Player types (Nit, Maniac, etc.) and adjustments
- Game Theory (15 pts) - Alpha/beta concepts, optimal frequencies

**Question Object Structure:**
```javascript
{
    category: "Category Name",
    question: "Question text",
    options: ["A", "B", "C", "D"],
    correct: 0,  // Index of correct answer
    points: 3,   // Point value
    explanation: "Why this answer is correct"
}
```

## State Management

The application uses simple global variables for state:
- `currentQuestion` - Current question index
- `score` - Total points earned  
- `userAnswers` - Array of user's selected answer indices
- `categoryScores` - Object tracking points per category

## Key Functions

- `startQuiz()` - Initializes quiz from start screen
- `displayQuestion()` - Renders current question and handles navigation state
- `selectOption(index)` - Handles answer selection and scoring
- `showResults()` - Calculates final score and category breakdown
- `restartQuiz()` - Resets all state for retaking

## Content Updates

When updating quiz content:

1. **Questions**: Modify the `questions` array in `questions.js`
2. **Scoring**: Update category point totals in `script.js` `showResults()` function
3. **Total Points**: Update the total in `script.js` percentage calculation and `index.html` description
4. **Categories**: Ensure new categories are included in the scoring breakdown object

The quiz is designed to align with a specific poker strategy guide, so questions should test practical poker concepts rather than memorization.

Remember to update the README.md when updating quiz content to reflect section and scoring changes.
