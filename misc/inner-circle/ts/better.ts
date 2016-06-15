class Better {

    name: string

    score_bets: number[][]

    winner: string

    top_scorer: string

    score_evolution: number[]

    score: number

    constructor(name: string, score_bets: number[][], winner: string, top_scorer: string) {
        this.name = name
        this.score_bets = score_bets
        this.winner = winner
        this.top_scorer = top_scorer
        this.score_evolution = compute_games_scores_evolution(score_bets)
        
        if (this.score_evolution.length > 0) this.score = this.score_evolution[this.score_evolution.length - 1]
        this.score += compute_winner_and_top_scorer_score(winner, top_scorer)
    }
}