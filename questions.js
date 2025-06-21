const questions = [
    // Part 1: Poker Math That Matters (25 points)
    {
        category: "Poker Math",
        question: "You have a flush draw on the flop. Using the Rule of 4, what's your approximate equity?",
        options: ["32%", "36%", "39%", "42%"],
        correct: 1,
        points: 4,
        explanation: "A flush draw has 9 outs (13 cards in suit minus 4 visible). Using Rule of 4 for flop: 9 × 4 = 36%. This quick estimation helps you rapidly calculate whether draws are profitable calls."
    },
    {
        category: "Poker Math",
        question: "You have an open-ended straight draw on the turn. Using the Rule of 2, what's your approximate equity?",
        options: ["12%", "16%", "18%", "20%"],
        correct: 1,
        points: 3,
        explanation: "Open-ended straight draws have 8 outs (4 cards on each end). On turn (1 card to come): 8 × 2 = 16%. Rule of 2 and 4 provides quick equity estimates without complex calculations."
    },
    {
        category: "Poker Math",
        question: "The pot is $100 and your opponent bets $50. What are your pot odds?",
        options: ["25%", "33%", "50%", "67%"],
        correct: 0,
        points: 2,
        explanation: "Pot odds = Call Amount / (Pot + Call Amount). You call $50 to win $150 total: 50/(100+50+50) = 25%. This is your risk-vs-reward ratio - you need >25% equity to profit."
    },
    {
        category: "Poker Math",
        question: "Using the fraction trick, if you face a 2/3 pot bet, what are your pot odds?",
        options: ["2/5", "2/6", "2/7", "2/8"],
        correct: 2,
        points: 2,
        explanation: "Fraction trick formula: When facing a/b pot bet, pot odds = a/(b+2a). For 2/3 pot: 2/(3+2×2) = 2/7 ≈ 28.6%. This mental shortcut is faster than full calculations."
    },
    {
        category: "Poker Math",
        question: "You're getting 3:1 pot odds. What's the minimum equity you need to make a profitable call?",
        options: ["20%", "25%", "30%", "33%"],
        correct: 1,
        points: 2,
        explanation: "3:1 odds means calling 1 to win 3. Convert to percentage: 1/(3+1) = 1/4 = 25%. This is the breakeven threshold - any equity above 25% makes the call profitable long-term."
    },
    {
        category: "Poker Math",
        question: "What's the key insight about breakeven equity?",
        options: ["You need >50% equity to call", "You only need to beat your pot odds", "You need the nuts to call", "Equity doesn't matter on the river"],
        correct: 1,
        points: 2,
        explanation: "The Breakeven Misconception: You don't need >50% equity to call profitably. You only need equity higher than your pot odds. If getting 3:1 (25%), winning 30% of the time is profitable!"
    },
    {
        category: "Poker Math",
        question: "What are implied odds?",
        options: ["The odds from the current pot", "Future money you can win when you hit", "Your opponent's folding frequency", "The probability of making your hand"],
        correct: 1,
        points: 2,
        explanation: "Implied odds = current pot odds + additional money you expect to win when you hit. They depend on opponent's hand strength, how disguised your draw is, and stack depth. Deep stacks = better implied odds."
    },
    {
        category: "Poker Math",
        question: "Which factor MOST improves your implied odds?",
        options: ["Shallow stacks", "Obvious draws", "Deep stacks", "Dry boards"],
        correct: 2,
        points: 2,
        explanation: "Deep stacks allow you to win more money when you hit, significantly improving implied odds"
    },
    {
        category: "Poker Math",
        question: "You face a $50 bet into a pot of $100 with 20% equity. The bet lays worse pot odds than your current equity. How much extra do you need win in the future (implied odds) to break even?",
        options: ["$10", "$12.50", "$25", "$50"],
        correct: 3,
        points: 4,
        explanation: "The intuition is that there is a gap between your equity and pot odds so you need future bets to make up the difference. Formula: X = b × (1/E - 1/β) where b=bet, E=equity, β=pot odds. X = 50 × (1/0.2 - 1/0.25) = 50 × (5 - 4) = $50. You need $50 more in future betting to justify the call. An alternative way to calculate is that the required final pot (RFP) = b/E = $50/0.2 = $250. So after you call, the pot is $200, therefore you need to win an extra $50 bet in the future."
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
        explanation: "The Strength Paradox: Being 'fairly strong' isn't reason to bet. When you bet, worse hands (QJ, KT) fold and better hands (any ace, any pair) never fold. You accomplish neither value nor bluff - perfect check-back spot."
    },
    {
        category: "Betting Strategy",
        question: "Which is the BEST strategic reason to check a strong hand like KK on K-7-2?",
        options: ["Pot control", "Trap aggressive opponents", "See safe turn", "Avoid variance"],
        correct: 1,
        points: 3,
        explanation: "Trapping allows aggressive opponents to bluff into you, gaining value from weak hands"
    },
    {
        category: "Betting Strategy",
        question: "On 9♠8♠7♦, why might checking AA be correct?",
        options: ["AA isn't strong enough", "Wait for good turns before committing money", "To induce bluffs", "To see the turn for free"],
        correct: 1,
        points: 3,
        explanation: "Many turn cards (tens, sixes, spades) drastically change hand strengths on this dynamic board"
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
        options: ["Allocate More Category 1 hands", "Allocate More Category 2 hands", "Allocate More Category 3 hands", "Allocate More Category 4 hands"],
        correct: 1,
        points: 4,
        explanation: "With a weak relative range, allocate more strong hands to Category 2 (showdown/defensive) rather than betting for value"
    },
    {
        category: "Ranges & Categories",
        question: "How should you adjust the Four Categories when you have a strong range relative to your opponent?",
        options: ["Allocate More Category 1 hands", "Allocate More Category 2 hands", "Allocate More Category 3 hands", "Allocate More Category 4 hands"],
        correct: 2,
        points: 4,
        explanation: "With a strong relative range, allocate more hands to Category 3 (bluffs)"
    },
    {
        category: "Ranges & Categories",
        question: "On the turn, you estimate your opponent's range: 30% made hands (you have 20% equity), 70% draws/bluffs (you have 80% equity). What's your total equity?",
        options: ["50%", "56%", "62%", "68%"],
        correct: 2,
        points: 4,
        explanation: "Equity = (30% × 20%) + (70% × 80%) = 6% + 56% = 62% total equity against their range"
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
        question: "When folded to, what is the primary reason that allows the Button to play much wider ranges than UTG?",
        options: ["Button is a lucky position", "Only needs to beat 2 players", "Gets better cards", "Has Postflop position"],
        correct: 1,
        points: 2,
        explanation: "Button only has 2 players (blinds) left to act, while UTG faces N-1 players who could have strong hands"
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
    {
        category: "Position",
        question: "What's the fundamental difference between checking IP vs OOP?",
        options: ["All of the below", "IP checks are generally weaker than OOP", "IP check immedaitely brings a free card; OOP might still face a bet", "OOP checks are generally stronger because it contains traps and check-raises."],
        correct: 0,
        points: 5,
        explanation: "IP check immediately leads to a free card, whereas when OOP checks, they still have to face a potential bet. There's a few takeaways from this. Firstly, this means that IP can leave their checks less protected and rely on the free card to bolster their checking range. OOP gets no such luxury so they need to protect their checking range with some traps and check-raises. Consequently, when the free card is a brick, then OOP can often ramp up the pressure because IP check really is a strong sign of weakness. Secondly, IP is risking their free card when they bet since it allows a check-raise so you have to be careful when betting hands that would have to fold to a raise."
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
        options: ["Very tight preflop, only shows strong hands", "Plays >50% of hands", "Calls everything", "Bets huge constantly"],
        correct: 0,
        points: 3,
        explanation: "Nits are very tight preflop (<15% VPIP), rarely re-raise without premiums, only show down strong hands"
    },
    {
        category: "Balance & Exploits",
        question: "What's the best exploit against a Nit?",
        options: ["Call them down light", "Trap with strong hands", "Bluff huge", "Steal blinds, don't pay off strength"],
        correct: 3,
        points: 4,
        explanation: "Nits fold too often, so steal relentlessly but don't pay them off when they show aggression"
    },
    {
        category: "Balance & Exploits",
        question: "Against a Calling Station, what's the most profitable adjustment?",
        options: ["Bluff more", "Check-raise more", "Value bet relentlessly, shut down bluffs", "Play tighter"],
        correct: 2,
        points: 4,
        explanation: "Calling stations call too much with weak hands, so value bet thin and stop bluffing"
    },
    {
        category: "Balance & Exploits",
        question: "How do you exploit a 'Fit or Fold' player?",
        options: ["Only bet strong hands", "Increase c-bet frequency, consider smaller sizing", "Always bet large", "Never bluff"],
        correct: 1,
        points: 4,
        explanation: "They fold to most c-bets when they miss, so increase frequency and potentially use smaller sizing"
    },
    {
        category: "Balance & Exploits",
        question: "Against a Maniac (plays >50% hands, constantly aggressive), how should you adjust?",
        options: ["Tighten up and call down with strong hands", "Match their aggression", "Fold everything", "Bluff more"],
        correct: 0,
        points: 4,
        explanation: "Tighten preflop, pick hands you can call down with, and let them hang themselves with weak hands"
    },
    
    // Part 6: Game Theory (15 points)
    {
        category: "Game Theory",
        question: "What is 'alpha' in poker mathematics?",
        options: ["Your win rate", "Defender's calling frequency", "Bluff success rate", "The aggressor's risk-vs-reward ratio"],
        correct: 3,
        points: 2,
        explanation: "Alpha = Bet Size / (Pot + Bet Size). This is the risk-vs-reward fraction and represents what % of time a your bluff needs to work (assuming the bluff always loses when called). By the way, you might then notice that a folding frequency of (1-alpha) makes these bluffs indifferent between bluffing and giving up :)"
    },
    {
        category: "Game Theory",
        question: "You bet $100 into a $100 pot. What's is alpha for this bet size?",
        options: ["25%", "33%", "50%", "55%"],
        correct: 2,
        points: 2,
        explanation: "Alpha = 100/(100+100) = 100/200 = 50%. Alternatively using the alpha fraction trick (which is different from the pot odds fraction trick) an a/b bet => a/(a+b) => 1/2 alpha."
    },
    {
        category: "Game Theory",
        question: "When your bluff to value ratio equals alpha, what happens to your opponent's bluff catchers?",
        options: ["They must fold", "They become indifferent between calling and folding", "They must call", "They get confused"],
        correct: 1,
        points: 4,
        explanation: "A bluff to value ratio of alpha makes your opponent's call-EV equal to fold-EV (indifferent)"
    },
    {
        category: "Game Theory",
        question: "When betting pot-sized on the river, how many bluff combos per value combo would make your opponent's bluff catchers indifferent between call and fold?",
        options: ["0.25", "0.5", "1", "2"],
        correct: 1,
        points: 3,
        explanation: "Pot bet = 50% alpha, so 0.5 bluffs per value. Note this translates to a 33% overall bluffing frequency = Beta"
    },
    {
        category: "Game Theory",
        question: "What's the relationship between bet size and the balanced bluff-to-value ratio?",
        options: ["Larger bets need fewer bluffs", "No relationship", "Larger bets need more bluffs", "Only pot-sized bets work"],
        correct: 2,
        points: 4,
        explanation: "Larger bets result in a higher balanced bluff-to-value ratio, aka alpha. (e.g., 0.5x pot => 0.33 alpha, 1x pot => 0.5 alpha, 2x pot => 0.67 alpha). The limit of alpha as your bet size approaches infinity is 1. An intuitive explanation is that bigger bets give your opponent worse pot odds, so you need more bluffs to incentivize your opponent to call. Alternatively, larger bets allow your value hands support more bluffs."
    }
];
