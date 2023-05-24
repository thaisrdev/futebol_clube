import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { teams, user, matches, leaderboards } from './mocks';
import TeamsModel from '../database/models/TeamModel';
import MatchModel from '../database/models/MatchModel';
import TeamService from '../database/services/TeamService';
import MatchesService from '../database/services/MatchesService';
import UserService from '../database/services/UserService';
import LeaderboardService from '../database/services/LeaderboardService';

chai.use(chaiHttp);

const { expect } = chai;
const teamService = new TeamService();
const leaderboardService = new LeaderboardService();

    describe('Testa a rota /teams', () => {
        beforeEach(sinon.restore)
        it('Testa getAll', async () => {
            sinon.stub(TeamsModel, 'findAll').resolves([]);
            const result = await teamService.getAll();
            expect(result).to.be.an('array');
        })
        it('Testa retorno de getAll', async () => {
            sinon.stub(TeamService.prototype, 'getAll').resolves(teams);
            const res = await chai.request(app).get('/teams');
            expect(res.body).to.be.deep.equal(teams);
            expect(res.status).to.be.equal(200);
        })
        it('Testa getById', async () => {
            sinon.stub(TeamService.prototype, 'getById').resolves(teams[1]);
            const res = await chai.request(app).get('/teams/2');
            expect(res.body).to.be.deep.equal(teams[1]);
            expect(res.status).to.be.equal(200);
        })
    })
    describe('Testa a rota /matches', () => {
        it('Testa as partidas em progresso', async () => {
            sinon.stub(MatchesService.prototype, 'getAll').resolves(matches);
            const res = await chai.request(app).get('/matches?inProgress=true');
            expect(res.body).to.be.deep.equal(matches);
            expect(res.status).to.be.equal(200);
        })
    })
    describe('Rota /login', () => {
        it('Testa role', async () => {
            sinon.stub(UserService.prototype, 'userRole').resolves(user);
            const res = await chai.request(app).get('/login/role');
            expect(res.body).to.be.deep.equal({ message: 'Token not found' });
            expect(res.status).to.be.equal(401);
        })
    })
    describe('Testa a rota /leaderboard', () => {
        it('Testa home', async () => {
            sinon.stub(MatchModel, 'findAll').resolves();
            const result = await leaderboardService.home();
            expect(result).to.be.an('array');
        })
    })
