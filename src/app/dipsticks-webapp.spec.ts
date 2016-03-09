import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {DipsticksWebappApp} from '../app/dipsticks-webapp';

beforeEachProviders(() => [DipsticksWebappApp]);

describe('App: DipsticksWebapp', () => {
  it('should have the `defaultMeaning` as 42', inject([DipsticksWebappApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([DipsticksWebappApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

