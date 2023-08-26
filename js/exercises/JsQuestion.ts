export interface BaseJsQuestion {
  prompt: string
}

export interface JsInputQuestion extends BaseJsQuestion {
  type: 'number' | 'string'
  code: string
  answer: string
  hints?: { whenAnswerIs: string; showText: string }[]
}

export interface JsChoiceQuestion extends BaseJsQuestion {
  type: 'choice'
  choices: { answer: string; correct?: boolean }[]
}

export type JsQuestion = JsInputQuestion | JsChoiceQuestion
