class Better {

    name: string;

    score: number;

    constructor(name: string, score_bets: number[][], winner: string, top_scorer: string) {
        this.name = name;
        this.score = compute_score(score_bets, winner, top_scorer);
    }
}