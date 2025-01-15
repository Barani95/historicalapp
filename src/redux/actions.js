export const MARK_VISITED = "MARK_VISITED";
export const UNMARK_VISITED = "UNMARK_VISITED";

export const markVisited = (id) => ({ type: MARK_VISITED, payload: id });
export const unmarkVisited = (id) => ({ type: UNMARK_VISITED, payload: id });
