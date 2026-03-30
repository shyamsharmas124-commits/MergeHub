/**
 * API Routes Handler
 * Defines all public API endpoints for issue discovery, analysis, and public scorecard data.
 * Routes include issue fetching, trending repositories, and user public profiles.
 */

import { Router } from 'express';
import { getIssues, analyzeIssue, getTrending, getRepoInfo, getPublicScorecard, getPublicScorecardImage } from '../controllers/api.controller.js';

const router = Router();

router.get('/issues/:owner/:repo', getIssues);
router.post('/issues/analyze', analyzeIssue);
router.get('/trending', getTrending);
router.get('/repos/:owner/:repo', getRepoInfo);
router.get('/public/:username', getPublicScorecard);
router.get('/public/:username/share-card.svg', getPublicScorecardImage);

export default router;