const questions = [
    // Part 1: Poker Math That Matters (25 points)
    {
        category: "Poker Math",
        question: "You have a flush draw on the flop. Using the Rule of 4, what's your approximate equity?",
        options: ["32%", "36%", "39%", "42%"],
        correct: 1,
        points: 2,
        explanation: "9 outs × 4 = 36% using the rule of 4"
    },
    {
        category: "Poker Math",
        question: "You have an open-ended straight draw on the turn. Using the Rule of 2, what's your approximate equity?",
        options: ["12%", "16%", "18%", "20%"],
        correct: 1,
        points: 2,
        explanation: "8 outs × 2 = 16% using the rule of 2"
    },
    {
        category: "Poker Math",
        question: "The pot is $100 and your opponent bets $50. What are your pot odds?",
        options: ["25%", "33%", "50%", "67%"],
        correct: 1,
        points: 2,
        explanation: "Call $50 to win $150 total: 50/(100+50+50) = 50/200 = 25%"
    },
    {
        category: "Poker Math",
        question: "Using the fraction trick, if you face a 2/3 pot bet, what are your pot odds?",
        options: ["2/5", "2/6", "2/7", "2/8"],
        correct: 2,
        points: 3,
        explanation: "Using formula: 2/(4+3) = 2/7 ≈ 28.6%"
    },
    {
        category: "Poker Math",
        question: "You're getting 3:1 pot odds. What's the minimum equity you need to make a profitable call?",
        options: ["20%", "25%", "30%", "33%"],
        correct: 1,
        points: 2,
        explanation: "3:1 means calling 1 to win 3, so 1/(3+1) = 1/4 = 25%"
    },
    {
        category: "Poker Math",
        question: "What's the key insight about breakeven equity?",
        options: ["You need >50% equity to call", "You only need to beat your pot odds", "You need the nuts to call", "Equity doesn't matter on the river"],
        correct: 1,
        points: 3,
        explanation: "You don't need to win more than 50% to profit - just more than your pot odds percentage"
    },
    {
        category: "Poker Math",
        question: "What are implied odds?",
        options: ["The odds from the current pot", "Future money you can win when you hit", "Your opponent's folding frequency", "The probability of making your hand"],
        correct: 1,
        points: 3,
        explanation: "Implied odds factor in additional money you expect to win on future streets when you hit your draw"
    },
    {
        category: "Poker Math",
        question: "Which factor MOST improves your implied odds?",
        options: ["Shallow stacks", "Obvious draws", "Deep stacks", "Dry boards"],
        correct: 2,
        points: 3,
        explanation: "Deep stacks allow you to win more money when you hit, significantly improving implied odds"
    },
    {
        category: "Poker Math",
        question: "You face a $50 bet with 20% equity, needing 25% to call. Using implied odds formula, how much extra do you need to win to break even?",
        options: ["$10", "$12.50", "$25", "$50"],
        correct: 1,
        points: 5,
        explanation: "X = b × (1/E - 1/β) = 50 × (1/0.2 - 1/0.25) = 50 × (5 - 4) = $50"
    },
    
    // Part 2: Betting Strategy (18 points)
    {
        category: "Betting Strategy",
        question: "What are the three primary reasons to bet?",
        options: ["Value, bluff, protection", "Strong hands, weak hands, draws", "Position, range, equity", "Aggression, deception, information"],
        correct: 0,
        points: 3,
        explanation: "1) Get worse hands to call (value), 2) Get better hands to fold (bluff), 3) Charge hands to see next card (protection)"
    },
    {
        category: "Betting Strategy",
        question: "You have KQ on A♠7♦3♣ rainbow. Why is betting often a mistake here?",
        options: ["KQ is too weak", "You accomplish neither value nor bluff", "The board is too dry", "You're out of position"],
        correct: 1,
        points: 3,
        explanation: "This demonstrates the Strength Paradox - worse hands fold, better hands call, so you accomplish neither value betting nor bluffing"
    },
    {
        category: "Betting Strategy",
        question: "Which is the BEST strategic reason to check a strong hand like AA on K-7-2?",
        options: ["Pot control", "Trap aggressive opponents", "See safe turn", "Avoid variance"],
        correct: 1,
        points: 3,
        explanation: "Trapping allows aggressive opponents to bluff into you, maximizing value from their mistakes"
    },
    {
        category: "Betting Strategy",
        question: "On 9♠8♠7♦, why might checking AA be correct?",
        options: ["AA isn't strong enough", "Too many bad turn cards", "To induce bluffs", "To see the turn for free"],
        correct: 1,
        points: 3,
        explanation: "Many turn cards (tens, sixes, spades) drastically change hand strengths on this dynamic board"
    },
    {
        category: "Betting Strategy",
        question: "What's the main problem with 'protection betting' as a primary reason?",
        options: ["It doesn't work", "Every hand benefits from it", "It's too aggressive", "It's outdated strategy"],
        correct: 1,
        points: 3,
        explanation: "Almost every hand benefits from equity denial, making it easy to over-bet. Focus on value/bluff reasons instead"
    },
    {
        category: "Betting Strategy",
        question: "When should you primarily check-raise out of position?",
        options: ["With weak hands only", "With strong hands to trap", "To protect checking range", "Never check-raise OOP"],
        correct: 2,
        points: 3,
        explanation: "Include strong hands in your checking range to protect it from exploitation and maintain balance"
    },
    
    // Part 3: Ranges & Four Categories (20 points)
    {
        category: "Ranges & Categories",
        question: "In the Four Categories Framework, what defines Category 1 hands?",
        options: ["Showdown value hands", "Drawing hands", "Strong enough to bet multiple streets for value", "Weak bluffing hands"],
        correct: 2,
        points: 3,
        explanation: "Category 1 = Value hands strong enough to bet multiple streets (top pair strong kicker, two pair, sets)"
    },
    {
        category: "Ranges & Categories",
        question: "What makes a hand Category 3 (Bluffing Candidates)?",
        options: ["Pure air with no equity", "Strong hands for value", "Weak but with draw equity or blockers", "Marginal showdown value"],
        correct: 2,
        points: 3,
        explanation: "Category 3 hands are currently weak but have properties making them good bluffs (draws, blockers)"
    },
    {
        category: "Ranges & Categories",
        question: "You have 9♠8♠ on A♥K♣5♦. This hand is best classified as:",
        options: ["Category 1 - Value", "Category 2 - Showdown", "Category 3 - Bluffing candidate", "Category 4 - Weak hand"],
        correct: 3,
        points: 3,
        explanation: "Category 4 - No showdown value, no draw equity, no good blockers on this board"
    },
    {
        category: "Ranges & Categories",
        question: "What's the purpose of having Category 2 (Showdown) hands?",
        options: ["To bluff with", "To value bet thin", "To control pot size and bluff-catch", "To fold to aggression"],
        correct: 2,
        points: 3,
        explanation: "Category 2 hands prefer smaller pots and serve as bluff-catchers (middle pair, weak top pair, ace-high)"
    },
    {
        category: "Ranges & Categories",
        question: "How should you adjust the Four Categories when you have a weak range relative to your opponent?",
        options: ["More Category 1 hands", "More Category 2 hands", "More Category 3 hands", "More Category 4 hands"],
        correct: 1,
        points: 4,
        explanation: "With a weak relative range, allocate more strong hands to Category 2 (showdown/defensive) rather than betting for value"
    },
    {
        category: "Ranges & Categories",
        question: "You estimate your opponent's range on the river: 20% nuts (you lose), 80% bluffs/worse (you win). What's your equity?",
        options: ["50%", "70%", "80%", "90%"],
        correct: 2,
        points: 4,
        explanation: "Equity = (20% × 0%) + (80% × 100%) = 0 + 80% = 80% equity against their range"
    },
    
    // Part 4: Position (12 points)
    {
        category: "Position",
        question: "What percentage of hands should you typically open from UTG in 6-max?",
        options: ["10%", "15%", "25%", "35%"],
        correct: 1,
        points: 2,
        explanation: "UTG ~15% (77+, ATs+, AJo+, KQs) due to many players left to act"
    },
    {
        category: "Position",
        question: "What's the fundamental difference between checking IP vs OOP?",
        options: ["IP checks are weaker", "IP sees next card immediately; OOP gives info without gaining any", "No significant difference", "OOP checks are stronger"],
        correct: 1,
        points: 3,
        explanation: "IP checking sees the next card immediately, while OOP checking gives information without gaining any"
    },
    {
        category: "Position",
        question: "Why can the Button play much wider ranges than UTG?",
        options: ["Button is lucky position", "Only needs to beat 2 players", "Gets better cards", "Can see all actions first"],
        correct: 1,
        points: 2,
        explanation: "Button only has 2 players (blinds) left to act, while UTG faces 5 players who could have strong hands"
    },
    {
        category: "Position",
        question: "What's the main challenge of playing out of position?",
        options: ["Weaker cards", "Must act first consistently", "Can't raise", "Always in blinds"],
        correct: 1,
        points: 2,
        explanation: "Acting first consistently throughout the hand provides less information and makes decisions harder"
    },
    {
        category: "Position",
        question: "Why must you sometimes include strong hands in your OOP checking range?",
        options: ["To see safe cards", "To protect checking range from exploitation", "To pot control", "To confuse opponents"],
        correct: 1,
        points: 3,
        explanation: "If you only check weak hands OOP, opponents can exploit your range by betting frequently when you check"
    },
    
    // Part 5: Balance & Exploits (20 points)
    {
        category: "Balance & Exploits",
        question: "What's the most reliable way to identify player types?",
        options: ["Betting patterns", "Position play", "Watching showdowns", "Stack size"],
        correct: 2,
        points: 3,
        explanation: "Showdowns reveal actual hand strength and are the most reliable information source"
    },
    {
        category: "Balance & Exploits",
        question: "How do you identify a Nit?",
        options: ["Plays >50% of hands", "Very tight preflop, only shows strong hands", "Calls everything", "Bets huge constantly"],
        correct: 1,
        points: 3,
        explanation: "Nits are very tight preflop (<15% VPIP), rarely re-raise without premiums, only show down strong hands"
    },
    {
        category: "Balance & Exploits",
        question: "What's the best exploit against a Nit?",
        options: ["Call them down light", "Steal blinds, don't pay off strength", "Trap with strong hands", "Bluff huge"],
        correct: 1,
        points: 4,
        explanation: "Nits fold too often, so steal relentlessly but don't pay them off when they show aggression"
    },
    {
        category: "Balance & Exploits",
        question: "Against a Calling Station, what's the most profitable adjustment?",
        options: ["Bluff more", "Value bet relentlessly, shut down bluffs", "Check-raise more", "Play tighter"],
        correct: 1,
        points: 4,
        explanation: "Calling stations call too much with weak hands, so value bet thin and stop bluffing"
    },
    {
        category: "Balance & Exploits",
        question: "How do you exploit a 'Fit or Fold' player?",
        options: ["Only bet strong hands", "Increase c-bet frequency, consider smaller sizing", "Always bet large", "Never bluff"],
        correct: 1,
        points: 3,
        explanation: "They fold to most c-bets when they miss, so increase frequency and potentially use smaller sizing"
    },
    {
        category: "Balance & Exploits",
        question: "Against a Maniac (plays >50% hands, constantly aggressive), how should you adjust?",
        options: ["Match their aggression", "Tighten up and call down with strong hands", "Fold everything", "Bluff more"],
        correct: 1,
        points: 3,
        explanation: "Tighten preflop, pick hands you can call down with, and let them hang themselves with weak hands"
    },
    
    // Part 6: Game Theory (15 points)
    {
        category: "Game Theory",
        question: "What is 'alpha' in poker mathematics?",
        options: ["Your win rate", "The aggressor's risk-vs-reward ratio: Bet/(Pot+Bet)", "Defender's calling frequency", "Bluff success rate"],
        correct: 1,
        points: 3,
        explanation: "Alpha = Bet Size / (Pot + Bet Size), representing what % of time your bluff needs to work"
    },
    {
        category: "Game Theory",
        question: "You bet $75 into a $100 pot. What's your alpha?",
        options: ["35%", "43%", "57%", "75%"],
        correct: 1,
        points: 3,
        explanation: "Alpha = 75/(100+75) = 75/175 ≈ 43%"
    },
    {
        category: "Game Theory",
        question: "When your bluff percentage equals alpha, what happens to your opponent?",
        options: ["They must fold", "They become indifferent between calling and folding", "They must call", "They get confused"],
        correct: 1,
        points: 4,
        explanation: "When bluff % = alpha, opponent's EV for calling and folding becomes identical (indifferent)"
    },
    {
        category: "Game Theory",
        question: "When betting pot-sized on the river, what's the optimal bluff-to-value ratio?",
        options: ["1:3", "1:2", "1:1", "2:1"],
        correct: 1,
        points: 3,
        explanation: "Pot bet = 50% alpha, so optimal ratio is 1 bluff for every 2 value bets (33% bluffs)"
    },
    {
        category: "Game Theory",
        question: "What's the relationship between bet size and required bluff frequency?",
        options: ["Larger bets need fewer bluffs", "No relationship", "Larger bets need more bluffs", "Only pot-sized bets work"],
        correct: 2,
        points: 2,
        explanation: "Larger bets have higher alpha, requiring more bluffs to achieve indifference (e.g., 2x pot = 67% bluffs needed)"
    }
];