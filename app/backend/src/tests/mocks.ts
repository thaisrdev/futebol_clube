const teams = [{
    id: 1,
    teamName: 'Avaí/Kindermann',
  },
  {
    id: 2,
    teamName: 'Bahia',
  },
  {
    id: 3,
    teamName: 'Botafogo',
  },
  {
    id: 4,
    teamName: 'Corinthians',
  },
  {
    id: 5,
    teamName: 'Cruzeiro',
  },
  {
    id: 6,
    teamName: 'Ferroviária',
  },
  {
    id: 7,
    teamName: 'Flamengo',
  },
  {
    id: 8,
    teamName: 'Grêmio',
  },
  {
    id: 9,
    teamName: 'Internacional',
  },
  {
    id: 10,
    teamName: 'Minas Brasília',
  },
  {
    id: 11,
    teamName: 'Napoli-SC',
  },
  {
    id: 12,
    teamName: 'Palmeiras',
  },
  {
    id: 13,
    teamName: 'Real Brasília',
  },
  {
    id: 14,
    teamName: 'Santos',
  },
  {
    id: 15,
    teamName: 'São José-SP',
  },
  {
    id: 16,
    teamName: 'São Paulo',
  }];

  const user = {
    id: 1,
    username: 'Admin',
    password: 'password',
    email: 'admin@admin.com',
    role: 'admin',
  };

  const matches = [
    {
      id: 41,
      homeTeamId: 16,
      homeTeamGoals: 2,
      awayTeamId: 9,
      awayTeamGoals: 0,
      inProgress: true,
    },
    {
      id: 42,
      homeTeamId: 6,
      homeTeamGoals: 1,
      awayTeamId: 1,
      awayTeamGoals: 0,
      inProgress: true,
    },
    {
      id: 43,
      homeTeamId: 11,
      homeTeamGoals: 0,
      awayTeamId: 10,
      awayTeamGoals: 0,
      inProgress: true,
    },
    {
      id: 44,
      homeTeamId: 7,
      homeTeamGoals: 2,
      awayTeamId: 15,
      awayTeamGoals: 2,
      inProgress: true,
    },
    {
      id: 45,
      homeTeamId: 5,
      homeTeamGoals: 1,
      awayTeamId: 3,
      awayTeamGoals: 1,
      inProgress: true,
    },
    {
      id: 46,
      homeTeamId: 4,
      homeTeamGoals: 1,
      awayTeamId: 12,
      awayTeamGoals: 1,
      inProgress: true,
    },
    {
      id: 47,
      homeTeamId: 8,
      homeTeamGoals: 1,
      awayTeamId: 14,
      awayTeamGoals: 2,
      inProgress: true,
    },
    {
      id: 48,
      homeTeamId: 13,
      homeTeamGoals: 1,
      awayTeamId: 2,
      awayTeamGoals: 1,
      inProgress: true,
    },
  ];
  
  const leaderboards = [
    {
      name: 'Palmeiras',
      totalPoints: 13,
      totalGames: 5,
      totalVictories: 4,
      totalDraws: 1,
      totalLosses: 0,
      goalsFavor: 17,
      goalsOwn: 5,
      goalsBalance: 12,
      efficiency: 86.67
    },
    {
      name: 'Corinthians',
      totalPoints: 12,
      totalGames: 5,
      totalVictories: 4,
      totalDraws: 0,
      totalLosses: 1,
      goalsFavor: 12,
      goalsOwn: 3,
      goalsBalance: 9,
      efficiency: 80
    },
    {
      name: 'Santos',
      totalPoints: 11,
      totalGames: 5,
      totalVictories: 3,
      totalDraws: 2,
      totalLosses: 0,
      goalsFavor: 12,
      goalsOwn: 6,
      goalsBalance: 6,
      efficiency: 73.33
    }];

  export { teams, user, matches, leaderboards }