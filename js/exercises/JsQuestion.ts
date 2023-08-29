export interface BaseJsQuestion {
  prompt: string
}

export interface JsInputQuestion extends BaseJsQuestion {
  type: 'number' | 'string'
  code: string
  answer: string | string[]
  hints?: { whenAnswerIs: string; showText: string }[]
}

export interface JsChoiceQuestion extends BaseJsQuestion {
  type: 'choice'
  choices: { answer: string; correct?: boolean }[]
  explanation?: string
}

export type JsQuestion = JsInputQuestion | JsChoiceQuestion
