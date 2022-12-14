import Coordinates from "../../utils/Coordinates";
import MoveSet from "../../utils/MoveSet";
import Move, { MoveType } from "../Move";

abstract class ChessPiece {
  player: number;

  constructor(player: number) {
    this.player = player;
  }

  abstract getLetter(): String;

  //TODO: change the way moves are done
  //returns the negated moves in case the player plays black
  abstract getMoves(x: number, y: number): MoveSet;

  reverseForBlack(moves: Set<Move>) {
    let newMoves = new Set<Move>();

    if (this.player === 1) {
      moves.forEach(function (move) {
        newMoves.add(
          new Move(
            new Coordinates(move.origin.x, move.origin.y),
            new Coordinates(-move.origin.x, -move.origin.y),
            [],
            move.moveType
          )
        );
      });
    } else {
      return newMoves;
    }

    return newMoves;
  }

  abstract getPicture(): string;
}

export default ChessPiece;
